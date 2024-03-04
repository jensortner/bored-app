type GetBoredProps ={
    name: string;
}

function GetBored(props: GetBoredProps) {
    const { name } = props;

    return <p>{name}</p>

}

export default GetBored
