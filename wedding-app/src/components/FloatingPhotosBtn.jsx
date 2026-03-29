import './FloatingPhotosBtn.css';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1gKDJkfGc6e9_XKbkyFEJButpR_kBIxSA';

export default function FloatingPhotosBtn() {
  return (
    <a
      className="floating-photos"
      href={DRIVE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Wedding Photos"
    >
      📸
      <span className="floating-label">Photos</span>
    </a>
  );
}
