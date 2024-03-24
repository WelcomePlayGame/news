import classes from './page-aside.module.css';
import Tabs, { Tab } from './page-tabs';
import PageTabPopular from './page-tab-popular';
import PageTabLatest from './page-tab-latest';
import PageTabTag from './page-tab-tag';
import { getArticle as get } from '@/lib/action';
const PageAside = () => {
  const ArticleFetch = async () => {
    const articles = await get();

    return <PageTabPopular articles={articles} />;
  };
  return (
    <main className={`md:ml-[30px]`}>
      <div className={`flex flex-col items-start mt-[10px] md:mt-[100px]`}>
        <div className={`${classes.connect_us_container}`}></div>
        <h3 className={`${classes.connect_us_h3} w-[300px]`}>
          Connect With Us
        </h3>
        <div className={`${classes.soc_block}`}>
          <span>
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              width="40px"
              height="40px"
              viewBox="0 0 563.432 563.432"
            >
              <g>
                <g>
                  <path
                    d="M532.832,0H30.6C13.703,0,0,13.703,0,30.6v502.232c0,16.896,13.703,30.6,30.6,30.6h502.232
			c16.897,0,30.6-13.703,30.6-30.6V30.6C563.432,13.696,549.735,0,532.832,0z M517.746,150.785
			c-4.376,4.963-8.972,9.706-13.782,14.223c-10.661,10-20.202,19.774-20.135,23.385c0.036,1.921,0.055,4.1,0.055,6.53
			c0,26.965-3.941,53.875-11.823,80.735c-7.883,26.855-19.86,52.626-35.931,77.302c-16.077,24.682-35.209,46.506-57.399,65.484
			c-22.191,18.984-48.948,34.125-80.265,45.422c-31.315,11.305-64.816,16.953-100.484,16.953
			c-47.179,0-90.992-10.588-131.445-31.775c-12.95-6.781-17.448-12.693-10.747-12.363c3.862,0.189,7.913,0.281,12.148,0.281
			c37.632,0,71.953-9.301,102.975-27.918c12.534-7.521,9.712-14.822-4.345-18.826c-11.561-3.293-22.35-8.715-32.369-16.254
			c-9.847-7.412-17.925-15.992-24.241-25.74c-7.95-12.271-7.007-23.189-1.763-22.748c3.317,0.281,6.487,0.422,9.517,0.422
			c4.468,0,8.917-0.287,13.335-0.857c7.32-0.949,1.218-4.572-11.879-11.059c-12.423-6.15-23.329-14.885-32.717-26.193
			c-15.245-18.348-22.864-39.664-22.864-63.924c0,0,0-0.281,0-0.624s9.278,4.926,21.94,8.482
			c12.663,3.556,14.052-2.246,4.958-12.234c-5.41-5.937-10.123-12.571-14.144-19.896c-8.09-14.725-12.13-30.691-12.13-47.907
			c0-9.131,1.145-17.932,3.427-26.389c3.813-14.113,17.644-15.006,27.858-4.56c21.383,21.873,46.059,40.019,74.015,54.438
			c28.183,14.541,57.932,24.027,89.236,28.446c14.474,2.044,25.19-2.57,24.492-8.941c-0.428-3.911-0.642-7.772-0.642-11.573
			c0-27.791,9.798-51.487,29.4-71.09c19.596-19.596,43.292-29.394,71.083-29.394c19.842,0,37.559,4.939,53.141,14.823
			c12.344,7.827,32.001,14.847,45.856,10.196c4.945-1.659,9.816-3.513,14.615-5.563c13.439-5.741,20.3-0.38,12.393,11.916
			c-3.525,5.483-7.589,10.563-12.179,15.227c-10.251,10.416-8.953,15.141,5.221,11.561c2.319-0.587,4.639-1.218,6.958-1.891
			C523.125,134.793,527.409,139.817,517.746,150.785z"
                  />
                </g>
              </g>
            </svg>
          </span>
          <span>
            <svg
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              id="Layer_1"
              viewBox="-143 145 512 512"
            >
              <path
                d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3
	c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
              />
            </svg>
          </span>
          <span>
            <svg
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              id="Layer_1"
              viewBox="-143 145 512 512"
            >
              <g>
                <path
                  d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
		c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"
                />
                <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	" />
                <path
                  d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
		c27.3,0,49.5,22.2,49.5,49.5V374.7z"
                />
                <path
                  d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
		c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"
                />
              </g>
            </svg>
          </span>
        </div>
        <div>
          <Tabs>
            <Tab label="Polular">
              <ArticleFetch />
            </Tab>
            <Tab label="Latest">
              <PageTabLatest />
            </Tab>
            <Tab label="Tags">
              <PageTabTag />
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  );
};
export default PageAside;
