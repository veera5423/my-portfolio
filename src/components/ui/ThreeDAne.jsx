import Spline from '@splinetool/react-spline';

export default function ThreeDAne() {
  return (
    <div className="spline-wrapper">
      <div className="spline-canvas-wrapper">
        <Spline scene="https://prod.spline.design/et35-CkaWA-U7EmL/scene.splinecode" className="spline-canvas" />
      </div>

      {/* Slanted blurred light overlays to simulate directional light */}
      <div className="spline-light spline-light-1" aria-hidden />
      
    </div>
  );
}
