"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    else if (typeof val === "number") {
        return val + 5;
    }
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLocaleLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        shape.side * shape.side;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
