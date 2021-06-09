const xd = './operacion' 

import(xd).then(
     resp => {
         resp.operaciones(2,2,"suma")
            .then((resp:number) => console.log(resp))
            .catch((err:string) => console.log(err))
         resp.operaciones(1,2,"resta")
            .then((resp:number) => console.log(resp))
            .catch((err:string) => console.log(err))
         resp.operaciones(1,2,"mimir")
            .then((resp:number) => console.log(resp))
            .catch((err:string) => console.log(err))
     }

)
