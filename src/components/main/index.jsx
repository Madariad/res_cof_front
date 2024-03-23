
import List from '@component/list'


function Main({data, loading, loadError}) {

  if (loading) {
    return <div>Loading...</div>;
  } else if (loadError) {
    return <div>Load error</div>;
  } else {
    return (
      <div className="container">
           
        <div className="mb-7">
                <List data={data} />   
        </div>
      </div>
    );
  }
}

export default Main;
