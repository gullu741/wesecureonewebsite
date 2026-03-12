export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
      fill="none"
    >
      {/* Left Face - US Blue */}
      <path d="M100 100 L30 60 L30 140 L100 180 Z" fill="var(--logo-navy-deep)" />
      
      {/* Right Face - Canada Red */}
      <path d="M100 100 L170 60 L170 140 L100 180 Z" fill="var(--brand-red)" />
      
      {/* Top Face - Split */}
      <path d="M100 100 L30 60 L100 20 Z" fill="var(--logo-navy-top)" />
      <path d="M100 100 L170 60 L100 20 Z" fill="var(--brand-red-light)" />

      {/* US Stripes (Left Face Bottom) */}
      <path d="M30 100 L100 140 L100 150 L30 110 Z" fill="var(--logo-silver)" />
      <path d="M30 120 L100 160 L100 170 L30 130 Z" fill="var(--logo-silver)" />

      {/* US Stars (Left Face Top) */}
      <circle cx="50" cy="80" r="3" fill="white" />
      <circle cx="65" cy="88" r="3" fill="white" />
      <circle cx="80" cy="96" r="3" fill="white" />
      <circle cx="50" cy="95" r="3" fill="white" />
      <circle cx="65" cy="103" r="3" fill="white" />
      <circle cx="80" cy="111" r="3" fill="white" />

      {/* Canada White Center (Right Face) */}
      <path d="M125 75 L145 63 L145 125 L125 137 Z" fill="var(--logo-white)" />

      {/* Canada Maple Leaf (Simplified) */}
      <path
        d="M135 110 L133 95 L128 98 L131 90 L128 85 L135 88 L135 80 L140 88 L147 85 L144 90 L147 98 L142 95 Z"
        fill="var(--brand-red)"
      />
    </svg>
  )
}
