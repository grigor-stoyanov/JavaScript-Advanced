function rectangle(width, height, color) {
    const rectangle = {}
    rectangle.width = Number(width)
    rectangle.height = Number(height)
    rectangle.color = color[0].toUpperCase() + color.slice(1)
    rectangle.calcArea = () => {
        return rectangle.height * rectangle.width
    }
    return rectangle
}





let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
let Rectangle = result;
let r = Rectangle(20, 30, 'yellow');
expect(r.width).to.equal(20,
    "Property 'width' not working");
