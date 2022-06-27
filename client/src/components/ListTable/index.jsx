import './index.scss'



const ListTable = ({ data }) => {
    return (
        <div className='table'>
            <thead>
                <tr>
                    {data.map((header) => (
                    <th>{ header }</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* map */}
                    <th>data</th>
                    <th>data</th>
                    <th>data</th>
                    <th>data</th>
                    <th>data</th>
                </tr>
            </tbody>
        </div>
    )
};

export default ListTable;
