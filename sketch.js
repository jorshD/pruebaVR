let cube;

function setup() {
  createVRCanvas(512, 512); // Crea un canvas XR y activa el modo VR
  cube = createCube(); // Crea un cubo
}

function draw() {
  background(200);

  if (cube.isSelected()) { // Verifica si el cubo está siendo mirado por el usuario
    cube.move(0.05, 0, 0); // Mueve el cubo hacia la derecha
  }

  cube.display(); // Dibuja el cubo
}

function createCube() {
  // Crea un cubo con tamaño y posición aleatorios
  const size = random(50, 100);
  const x = random(-200, 200);
  const y = random(-200, 200);
  const z = random(-100, -200);

  // Retorna un objeto que representa el cubo
  return {
    size: size,
    position: createVector(x, y, z),
    isSelected: function() {
      // Retorna true si el usuario está mirando el cubo
      return xr.isSelected(this.position, this.size);
    },
    move: function(x, y, z) {
      // Mueve el cubo en las coordenadas x, y, z
      this.position.x += x;
      this.position.y += y;
      this.position.z += z;
    },
    display: function() {
      // Dibuja el cubo en el canvas
      push();
      translate(this.position.x, this.position.y, this.position.z);
      box(this.size);
      pop();
    }
  }
}
