import { useDeviceDetection, getPhoneUrl, getSmsUrl } from '../../hooks/use-device-detection';
import { Phone, MessageSquare, Copy, Check, Mail } from 'lucide-react';
import { useCopyToClipboard } from '../../hooks/use-copy-to-clipboard';

interface SmartContactButtonProps {
  phoneNumber: string;
  variant?: 'call' | 'sms' | 'email';
  className?: string;
  children?: React.ReactNode;
  smsMessage?: string;
}

export function SmartContactButton({
  phoneNumber,
  variant = 'call',
  className = '',
  children,
  smsMessage
}: SmartContactButtonProps) {
  const { isMobile } = useDeviceDetection();
  const { copied, copyToClipboard } = useCopyToClipboard(2000);

  const handleDesktopClick = async () => {
    if (variant === 'email') {
      // Open default email client
      window.location.href = `mailto:${phoneNumber}`;
      return;
    }

    const success = await copyToClipboard(phoneNumber);
    if (!success) {
      // Fallback - show number in alert
      alert(`Numer telefonu: ${phoneNumber}`);
    }
  };

  const getMobileUrl = () => {
    if (variant === 'sms') {
      return getSmsUrl(phoneNumber, smsMessage);
    }
    if (variant === 'email') {
      return `mailto:${phoneNumber}`;
    }
    return getPhoneUrl(phoneNumber);
  };

  const getButtonText = () => {
    // Desktop: show "Skopiowano!" when copied
    if (!isMobile && copied) {
      return 'Skopiowano!';
    }

    if (children) return children;

    if (isMobile) {
      if (variant === 'sms') return 'Wyślij SMS';
      if (variant === 'email') return 'Wyślij email';
      return 'Zadzwoń teraz';
    }

    if (variant === 'sms') return phoneNumber;
    if (variant === 'email') return phoneNumber;
    return phoneNumber;
  };

  const getIcon = () => {
    if (copied) return <Check className="h-5 w-5" />;
    if (variant === 'sms') return <MessageSquare className="h-5 w-5" />;
    if (variant === 'email') return <Mail className="h-5 w-5" />;
    if (isMobile) return <Phone className="h-5 w-5" />;
    return <Copy className="h-5 w-5" />;
  };

  if (isMobile) {
    return (
      <a
        href={getMobileUrl()}
        className={`transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      >
        {getButtonText()}
      </a>
    );
  }

  return (
    <button
      onClick={handleDesktopClick}
      className={`transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      title={copied ? 'Skopiowano!' : 'Kliknij aby skopiować numer'}
    >
      {getIcon()}
      {getButtonText()}
    </button>
  );
}