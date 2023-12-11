import css from 'components/Statistics/Statistics.module.css'

const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
  };
  
  const Statistics = ({ title, stats }) => {
    return (
      <section className={`${css.statistics}`}>
        {title && <h2 className={`${css.title}`}>{title}</h2>}
        
        <ul className={`${css.statList}`}>
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className={`${css.item}`} style={{ backgroundColor: generateRandomColor() }}>
              <span className={`${css.label}`}>{label}</span>
              <span className={`${css.percentage}`}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Statistics;