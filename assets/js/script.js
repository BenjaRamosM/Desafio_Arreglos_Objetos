
const propiedades_venta = [
{
    nombre:'Apartamento de lujo',
    src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion:'123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones:'4 Habitaciones',
    baños:'4 Baños',
    costo:'5.000',
    atracciones:'Central Park',
    superficie:'120 m2',
    estacionamiento:'no tiene ',
    bodega:'10 m2',
    somoke:false,
    pets:true
},
{
    nombre:'Trailer campera',
    src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion:' 789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones:'2 Habitaciones',
    baños:'1 Baño',
    costo:'500',
    atracciones:'Lago y trecking al parque jurasico',
    superficie:'5000 m2',
    estacionamiento:'4 ',
    bodega:'2 m2',
    somoke:true,
    pets:true
},
{
    nombre:'Penthouse de lujo con terraza panorámica',
    src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion:' 567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones:'15 Habitaciones',
    baños:'18 Baños',
    atracciones:'Hollywood av.',
    superficie:'650 m2',
    estacionamiento:'20 plazas para que estaciones todos tus autos de lujo ',
    bodega:'120 m2',
    costo:'5.6 M',
    somoke:false,
    pets:true
}
];

const propiedades_alquiler = [
    {
        nombre:'Apartamento en el centro de la ciudad',
        src:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion:'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion:'123 Main Street, Anytown, CA 91234',
        habitaciones:'2 Habitaciones',
        baños:'2 baños',
        atracciones: 'Mall costanera center',
        superficie:'65 m2',
        estacionamiento:'No tiene',
        bodega:'No tiene',
        costo:'1.000',
        smoke:false,
        pets:true
    },
    {
        nombre:'Apartamento en la playa',
        src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion:'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion:'456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones:'3 Habitaciones',
        baños:'3 baños',
        atracciones: 'Miami beach',
        superficie:'150 m2',
        estacionamiento:'3 Plazas',
        bodega:'20 m2',
        costo:'4.500',
        smoke:true,
        pets:true
    },
    {
        nombre:'Condominio moderno en zona residencial',
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion:'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion:'123 Main Street, Anytown, CA 91234',
        habitaciones:'2 Habitaciones',
        baños:'2 baños',
        atracciones: 'Estacion central de trenes',
        superficie:'75 m2',
        estacionamiento:'2 plazas',
        bodega:'6 m2',
        costo:'2.500',
        smoke:false,
        pets:true
    },

];



let texto  ="";
let texto_al="";
let texto_pets="";
let texto_somke="";

let tarjeta = document.querySelector(".prop_venta");
let tarjeta2 = document.querySelector(".prop_alquiler");

for(let lugar of propiedades_venta) {
    
    if(lugar.somoke==false)
    {
        texto_somke = `
        <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>
        `
    }
    else
    {
        texto_somke = `
        <p class="text-success">
            <i class="fas fa-smoking-ban"></i> Permitido fumar
        </p>
        `
    }

    if(lugar.pets==false)
    {
        texto_pets = `
        <p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten mascotas
        </p>
        `
    }
    else
    {
        texto_pets = `
        <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
        `
    }

    texto+=`
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src="${lugar.src}"
            class="card-img-top"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${lugar.nombre}
                </h5>
                <p class="card-text">
                ${lugar.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${lugar.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${lugar.habitaciones}|
                  <i class="fas fa-bath"></i> ${lugar.baños}
                </p>
                <p>
                  <i class="fas fa-car"></i> Parking: ${lugar.estacionamiento}|
                  <i class="fas fa-cube"></i> Bodega: ${lugar.bodega}
                </p>
                <p>
                <i class="fas fa-home"></i> Superficie: ${lugar.superficie}
                </p>
                <p>
                <i class="fas fa-place-of-worship"></i> Atracciones cercanas: ${lugar.atracciones}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${lugar.costo}</p>
                ${texto_somke}
                ${texto_pets}
            </div>
        </div>
    </div>
`
}

for(let lugar of propiedades_alquiler) {
    
    if(lugar.smoke==false)
    {
        texto_somke = `
        <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>
        `
    }
    else
    {
        texto_somke = `
        <p class="text-success">
            <i class="fas fa-smoking-ban"></i> Permitido fumar
        </p>
        `
    }

    if(lugar.pets==false)
    {
        texto_pets = `
        <p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten mascotas
        </p>
        `
    }
    else
    {
        texto_pets = `
        <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
        `
    }

    texto_al+=`
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src="${lugar.src}"
            class="card-img-top"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${lugar.nombre}
                </h5>
                <p class="card-text">
                ${lugar.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${lugar.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${lugar.habitaciones}|
                  <i class="fas fa-bath"></i> ${lugar.baños}
                </p>
                <p>
                  <i class="fas fa-car"></i> Parking: ${lugar.estacionamiento}|
                  <i class="fas fa-cube"></i> Bodega: ${lugar.bodega}
                </p>
                <p>
                <i class="fas fa-home"></i> Superficie: ${lugar.superficie}
                </p>
                <p>
                <i class="fas fa-place-of-worship"></i> Atracciones cercanas: ${lugar.atracciones}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${lugar.costo}</p>
                ${texto_somke}
                ${texto_pets}
            </div>
        </div>
    </div>
`
}

if(tarjeta!=null)
{
    tarjeta.innerHTML = texto;
}

if(tarjeta2!=null)
{
    tarjeta2.innerHTML = texto_al;
}

