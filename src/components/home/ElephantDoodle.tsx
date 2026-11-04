/** Hand-drawn elephant for the fourth spot on the project board. */
export function ElephantDoodle() {
  const fill = "#cfd3e6";
  const ink = "#29262e";
  return (
    <svg aria-hidden="true" viewBox="0 0 220 170" fill="none" stroke={ink} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      {/* tail */}
      <path d="M176 84 C192 84 196 100 192 112" />
      <path d="M187 110 l5 8 l5 -8" />
      {/* body with legs */}
      <path
        d="M64 70 C70 40 170 38 178 76 C182 96 178 114 174 124 L174 146 Q174 150 170 150 L154 150 Q150 150 150 146 L150 132 L102 132 L102 146 Q102 150 98 150 L82 150 Q78 150 78 146 L78 120 Z"
        fill={fill}
      />
      {/* trunk */}
      <path d="M44 104 C36 118 40 132 28 138" stroke={ink} strokeWidth="17" />
      <path d="M44 104 C36 118 40 132 28 138" stroke={fill} strokeWidth="10" />
      {/* head */}
      <circle cx="62" cy="82" r="30" fill={fill} />
      {/* ear */}
      <ellipse cx="80" cy="82" rx="17" ry="25" fill="#e3e6f3" />
      {/* eye and cheek */}
      <circle cx="50" cy="76" r="2.8" fill={ink} stroke="none" />
      <circle cx="53" cy="92" r="6" fill="#f3aabe" stroke="none" opacity="0.8" />
      {/* floating heart */}
      <path d="M110 24 C100 14 88 26 110 42 C132 26 120 14 110 24 Z" fill="#f3aabe" />
      {/* ground */}
      <path d="M20 158 C70 154 150 162 204 156" strokeWidth="2.5" />
    </svg>
  );
}
