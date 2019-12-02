
import styles from './index.css';
// import Link from 'umi/link';
import router from 'umi/router';
export default function() {
  const data = [
    {id:1,name:'tom'},
    {id:2,name:'hh'}
  ]
  return (
    <div className={styles.normal}>
      <h1>Page user</h1>
      <ul>
        {data.map(u => (
          <li key={u.id} onClick={()=>router.push(`/users/${u.name}`)}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
