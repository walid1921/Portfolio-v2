import Image from "next/image";

const Logo = ({ width }: { width: number }) => {
  const defaultWidth = width || 100; // Default width fallback
  const aspectRatio = 1; // Replace with the actual aspect ratio of your logo (e.g., 1 for a square logo)

  return (
    <div className="flex pl-[32px] my-7">
      <div style={{ width: `${defaultWidth}px` }}>
        <Image
          src="/logoMain.png"
          alt="Logo"
          width={defaultWidth}
          height={defaultWidth / aspectRatio} // Dynamically calculate height based on aspect ratio
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Ensures it loads quickly (optional for critical logos)
          className="object-contain" // Ensures the logo fits its container
        />
      </div>
    </div>
  );
};

export default Logo;
