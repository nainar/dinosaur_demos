const window = {}

registerPaint('backgroundpainter', class {
  static get inputArguments() {
    return [
      '<color>',
      '<color>',
    ];
  }

  paint(ctx, geom, properties, args) {
    this.quadGradient(ctx, geom, {
      topLeft: args[0].toString(),
      bottomRight: args[1].toString()
    });
  }

  quadGradient(ctx, geom, corners) { 
    var gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height);
    gradient.addColorStop(0, corners.topLeft);
    gradient.addColorStop(1, corners.bottomRight);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, geom.width, geom.height);
  }

})