import React from 'react';
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiNextdotjs, SiMongodb, SiCss3, SiHtml5, SiJavascript, SiExpress } from 'react-icons/si';

const skills = [SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiNextdotjs,SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3];

const SkillOrbit: React.FC<{ size?: number; radius?: number }> = ({ size = 360, radius = 160 }) => {
  const angleStep = (Math.PI * 2) / skills.length;
  // increase depth factor for a stronger 3D effect
  const depthFactor = 0.9 * radius; // how deep the z axis goes

  return (
    <div
      className="orbit-container"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="orbit">
        {skills.map((Icon, i) => {
          const angle = i * angleStep;
          const x = Math.cos(angle) * radius;
          // larger vertical offset to make the ellipse more pronounced
          const y = Math.sin(angle) * (radius * 0.18);
          // z used to create depth; when the orbit rotates, items appear closer/further
          const z = Math.sin(angle) * depthFactor;
          const scale = 1 + (z / depthFactor) * 0.28; // stronger scale change with depth
          const opacity = 0.6 + (z / depthFactor) * 0.35;

          return (
            <div
              key={i}
              className="orbit-item"
              title={Icon.displayName || `skill-${i}`}
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                opacity,
                zIndex: Math.round(z) + 200,
              }}
            >
              <Icon />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillOrbit;
