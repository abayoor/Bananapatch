import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

type MediaProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  eager?: boolean;
};

/** Replace the referenced image in /public/images when the final asset is ready. */
export default function Media({ src, alt, className = '', label = 'Фотоматериал готовится', eager = false }: MediaProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className={`media-placeholder ${className}`} aria-label={alt} role="img">
        <ImageIcon aria-hidden="true" size={26} strokeWidth={1.5} />
        <span>{label}</span>
      </div>
    );
  }

  return <img className={className} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setMissing(true)} />;
}
