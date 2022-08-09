import React from 'react';
//import styeld from 'styled-components';



class TerceiraEtapa extends React.Component {

    render(){
        return(
            <div nameClass="Questionario">
                <div>
                    <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
                </div>
                <div>
                    <p> 5. Por que você não terminou um curso de graduação? </p>
                    <input value></input>
                </div>
                <div>
                    <p> 6. Você fez algum curso complementar?</p>
                    <select>
                        <option value="Nenhum"> Nenhum </option>
                        <option value="Curso técnico"> Curso técnico </option>
                        <option value="Curso de inglês"> Curso de inglês</option>
                    </select>
                </div>
            </div> 
        ) 
    }
};

export default TerceiraEtapa;