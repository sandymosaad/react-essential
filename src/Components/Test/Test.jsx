const userData = {
  firstName: 'Sandy ',
  lastName: 'Mosaad', 
  title: 'Front-End Developer', 
};


export default function Test() {
    return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName + " "+userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
    );
}