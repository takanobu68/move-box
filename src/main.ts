import { World } from "./World/World";

function main() {
  const container = document.querySelector("#scene-container");

  const world = new World(container);

  container.addEventListener("click", function () {
    world.move();
  });

	// 2. Render the scene
  // world.render();

  world.start();
}

main();
