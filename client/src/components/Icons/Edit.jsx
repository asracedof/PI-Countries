import styles from '../Detail/Detail.module.css';
const Edit = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      className={styles.svgIcon}
      {...props}
    >
      <g stroke="#a649da" strokeLinecap="round" strokeWidth={2}>
        <path d="M20 20H4" />
        <path
          d="M14.586 4.414a2 2 0 1 1 2.828 2.829l-8.283 8.283-3.03.202.202-3.03z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  )
  export default Edit