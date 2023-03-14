const users = [{
    brand: 'mazda',
    pintu: 2,
    BBM: 'pertamax turbo'

},
{
    brand: 'avanza',
    pintu: 4,
    BBM: 'pertamax'
},
{
    brand: 'honda civic',
    pintu: 2,
    BBM: 'pertalite'

}
]

let mobil = prompt("pilih jenis BMM pertamax/pertalite/pertamax turbo ");
const usersMobil = users.filter((user) => user.BBM === mobil);

console.log(usersMobil)
