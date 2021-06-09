
import  { Operaciones }   from './Operaciones'

 const operacion = (numA:number, numB:number, text:string) => {
    const promise = new Promise<number>((resolve:Function,reject:Function)=>{
        const op = new Operaciones(numA, numB)
        //Para probar async await 
        setTimeout(() => {
            if(text === "suma" || text === "resta"){
                if(text ==="suma"){
                    resolve(op.suma())
                }else{
                    resolve(op.resta())
                }
            }else{
               reject("error de tipo de operacion")
            }   
        },2000)
    })
   return promise
}

export const operaciones = async (numA:number, numB:number, text:string) => {
 const res = await operacion(numA,numB,text)
 return res
}