const montos = [
    { cantidad: "5", valor: 5 },
    { cantidad: "10", valor: 10 },
    { cantidad: "20", valor: 20 },
    { cantidad: "50", valor: 50 },
    { cantidad: "100", valor: 100 },
]
let fondos = 1000000
let saldo = 0
let cargos = []
let ingresos = []
let totalIngreos=0
let totalCargos=0


function numeroDeCuenta() {
    let cuenta = parseInt(prompt("ingrese numero de cuenta"))
    while (isNaN(cuenta)) {
        alert("ingrese una cuenta valida")
        cuenta = parseInt(prompt("ingrese numero de cuenta"))
    }
    console.log("su numero de cuenta es:" + " " + cuenta)
}
numeroDeCuenta()

function operacion() {
    let transaccion = (prompt("escribe deposito o retiro")).toLowerCase()
    //console.log(transaccion)
    while (transaccion != "deposito" && transaccion != "retiro") {
        alert(" por favor ingresa deposito o retiro")
        transaccion = prompt(" escribe deposito o retiro").toLowerCase()
    }
    console.log(transaccion)
    if (transaccion === "deposito") {
        let deposito = parseInt(prompt("ingrese monto del deposito"))
        while (isNaN(deposito)) {
            alert("ingrese un monto valido")
            deposito = parseInt(prompt("ingrese monto del deposito"))
        }
        console.log(deposito)
        saldo = fondos + deposito
        fondos = saldo
        ingresos.push({ deposito })
    }
    if (transaccion === "retiro") {
        let seleccion = montos.map((montos) => montos.cantidad + "$")
        alert("Montos:" + "  " + seleccion.join("   "))
        let retiro = parseInt(prompt("ingrese monto del retiro"))
        while (isNaN(retiro)) {
            alert("ingrese un monto valido")
            retiro = parseInt(prompt("ingrese monto del retiro"))
        }
        console.log(retiro)
        saldo = fondos - retiro
        fondos = saldo
        cargos.push({ retiro })
    }
}
operacion()
let repetir = prompt("quiere hacer otra transaccion si / no").toLowerCase()
while (repetir != "si" && repetir != "no") {
    alert(" por favor ingresa si o no")
    repetir = prompt("quiere hacer otra transaccion si / no").toLowerCase()
    }
while (repetir === "si") {
        operacion()
        repetir = prompt("quiere hacer otra transaccion si / no").toLowerCase()
    }

console.log(ingresos)
console.log(cargos)
console.log("su saldo es:" + " " + saldo)