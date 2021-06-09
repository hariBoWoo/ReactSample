// bootstrap 으로 파일 옮겨서 사용해야함 + 더미.json 까지 같이
import React, {Fragment, useState} from 'react';
import data from '../data/dummy.json';

export default function DataView(){
    const day = 1;
    const [newData, setNewData] = useState(Datedy);
    console.log(newData);

    const searchData = newData.words.filter(word => word.day ===day);

    return(
        <Fragment>
            <ul>
                {
                    data.days.map(item=>(
                        <li>DAY : {item.day}</li>
                    ))
                }
            </ul>

            <table>
                {
                    searchData.map(word=>(
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))
                }
            </table>
        </Fragment>
    );
}