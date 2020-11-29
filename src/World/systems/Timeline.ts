import gsap from "gsap";

function createTimeLine(planeArry) {
  const [plane1, plane2, plane3, plane4, plane5, plane6] = planeArry;
  const tl = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: 1,
    repeatDelay: 1,
  });
  tl.add(createChildTimeline(plane1, 0.25, 0.25, 0.5))
    .add(createChildTimeline(plane2, 0.25, 0.5, 0.25))
    .add(createChildTimeline(plane3, 0, 0.25, 0.25))
    .add(createChildTimeline(plane4, 0.25, 0.25, 0))
    .add(createChildTimeline(plane5, 0.25, 0, 0.25))
    .add(createChildTimeline(plane6, 0.5, 0.25, 0.25));
  return tl;
}
function createChildTimeline(plane, posX, posY, posZ) {
  const childTl = gsap.timeline();
  childTl
    .to(plane.position, { x: posX, y: posY, z: posZ })
    .to(plane.scale, { x: 0.5, y: 0.5 }, "<")
    .to(plane.material, { opacity: 1 }, "<");
  return childTl;
}

export { createTimeLine };
