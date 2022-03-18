import React from 'react'
import { useData } from './Components/useData';

export const Tabla = () => {


    const { data ,loading } = useData();


  return (
    <>
        <div>Tabla</div>
        <div>
          <table className='tg'>
            <thead>
              <tr className='head'>
                <td>Código</td>
                <td>Descripcion</td>
                <td>Precio</td>
              </tr>
            </thead>
            <tbody>
              {data.map(producto=>(
                <tr>
                  <td>{producto.codigo} </td>
                  <td>{producto.descripcion} </td>
                  <td>{producto.precio} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
           
    </>
  )
  
}
