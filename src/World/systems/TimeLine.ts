import gsap from "gsap";

function createTimeLine(planeArry) {
  const [plane1, plane2, plane3, plane4, plane5, plane6] = planeArry;
  const tl = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: 1,
    repeatDelay: 1,
  });
  tl.to(plane1.position, { x: 0.25, y: 0.25, z: 0.5 })
    .to(plane1.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane1.material, { opacity: 1 }, "<")
    .to(plane2.position, { x: 0.25, y: 0.5, z: 0.25 })
    .to(plane2.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane2.material, { opacity: 1 }, "<")
    .to(plane3.position, { x: 0, y: 0.25, z: 0.25 })
    .to(plane3.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane3.material, { opacity: 1 }, "<")
    .to(plane4.position, { x: 0.25, y: 0.25, z: 0 })
    .to(plane4.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane4.material, { opacity: 1 }, "<")
    .to(plane5.position, { x: 0.25, y: 0, z: 0.25 })
    .to(plane5.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane5.material, { opacity: 1 }, "<")
    .to(plane6.position, { x: 0.5, y: 0.25, z: 0.25 })
    .to(plane6.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane6.material, { opacity: 1 }, "<");
  return tl;
}

export { createTimeLine };
