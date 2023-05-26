import style from '../Home/Home.module.css';

const Loader = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		className={style.loader}
		viewBox='0 0 64 64'
		{...props}>
		<path
			d='M56.375 2H7.625A.612.612 0 0 0 7 2.599V61.4c0 .331.28.599.625.599h48.75a.612.612 0 0 0 .625-.599V2.599c0-.33-.28-.598-.625-.598Z'
			pathLength={360}
		/>
		<path
			d='M55.75 60.803H8.25V3.197h47.5v57.606Z'
			pathLength={360}
		/>
		<path
			d='M29.764 47.61a.644.644 0 0 0-.88.083.581.581 0 0 0 .087.842l3.906 3.067a.64.64 0 0 0 .396.136c.18 0 .36-.075.483-.219a.581.581 0 0 0-.087-.842l-3.905-3.068ZM42.356 34.905c-3.895-.139-5.394 2.77-5.638 4.316l-.86 5.013a.602.602 0 0 0 .516.688.618.618 0 0 0 .718-.494l.86-5.02c.022-.14.592-3.434 4.359-3.307.342.011.634-.247.647-.577a.61.61 0 0 0-.602-.62Z'
			pathLength={360}
		/>
		<path
			d='M13.153 55.566c0 .33.28.599.625.599h36.444a.612.612 0 0 0 .625-.599V8.434c0-.33-.28-.599-.625-.599H13.778a.612.612 0 0 0-.625.599v47.132Z'
			pathLength={360}
		/>
		<path
			d='M25.312 26.557c-.34.937-.308 2.26-.249 3.036-1.439.255-4.68 1.498-6.115 7.442-.44.525-1.073 1.086-1.743 1.676-.945.835-1.97 1.74-2.802 2.822V20.54h9.32c-.005 2.143.444 4.9 1.59 6.018ZM49.597 43.482c-1.213-4.31-3.283-9.803-6.126-13.708-.855-1.175-2.761-2.747-3.786-3.592l-.05-.041c-.217-1.358-.52-3.56-.789-5.602h10.752v22.943Z'
			pathLength={360}
		/>
		<path
			d='M29.816 45.151c-.76-.4-1.494-.717-2.17-.966.003-.142-.006-.293.002-.413.277-4.068 2.801-7.525 7.502-10.274 3.572-2.089 7.118-2.955 7.154-2.964a1.7 1.7 0 0 1 .174-.03c.191.264.38.537.564.818-.89.17-3.383.75-5.992 2.297-2.823 1.672-6.272 4.814-7.105 10.392a26.605 26.605 0 0 0-.129 1.14ZM32.202 33.635c-3.05.26-5.58-1.072-6.554-2.189.304-1.137 2.796-2.961 4.58-3.955a.592.592 0 0 0 .31-.565l-.107-1.277c.095.008.191.013.287.015l.168.003a4.915 4.915 0 0 0 3.22-1.101l.006-.005.29 7.973c-.572.338-1.116.689-1.63 1.051-.25.018-.465.04-.57.05ZM27.806 17.92H27.8l-.785.006-.204-2.454c.005-.011.012-.022.016-.033.394-.353 1.33-1.093 2.364-1.187 1.907-.174 4.25.087 4.63 2.304l.234 6.474-.763.627a3.62 3.62 0 0 1-2.381.813l-.168-.003a3.631 3.631 0 0 1-2.506-1.074 3.387 3.387 0 0 1-.65-.946 3.249 3.249 0 0 1-.29-1.098l-.183-2.227.695-.004a.612.612 0 0 0 .62-.603.612.612 0 0 0-.624-.594Z'
			pathLength={360}
		/>
		<path
			d='M38.436 26.543c.023.14.097.267.208.36l.226.186c.657.542 1.823 1.505 2.711 2.394-.94.26-3.327.993-5.953 2.369l-.312-8.571v-.01l-.247-6.793a.596.596 0 0 0-.007-.07c-.392-2.439-2.575-3.658-5.988-3.348a4.452 4.452 0 0 0-1.413.387c.66-.815 1.796-1.586 3.737-1.586 1.494 0 2.81.571 3.914 1.699 1.036 1.059 1.686 2.422 1.88 3.942.318 2.485.901 6.963 1.244 9.041ZM25.7 17.172l.353 4.27c.041.512.172 1.012.39 1.488.218.473.514.904.881 1.28.509.522 1.14.918 1.83 1.165l.107 1.278c-.455.269-1.302.793-2.163 1.44-.3.225-.572.444-.821.657-.01-.811.07-1.656.336-2.051a.577.577 0 0 0 .077-.482.606.606 0 0 0-.323-.377c-1.086-.52-1.728-5.046-1.233-7.112a7.472 7.472 0 0 1 .565-1.556Z'
			pathLength={360}
		/>
		<path
			d='M14.402 54.968V43.962c.728-1.788 2.278-3.159 3.65-4.37.524-.462 1.025-.907 1.453-1.349.64.033 2.32.23 2.78 1.368.241 1.085.701 2.028 1.372 2.788.124.14.3.211.478.211a.64.64 0 0 0 .403-.141.582.582 0 0 0 .073-.844c-2.313-2.619-.76-7.08-.745-7.125a.593.593 0 0 0-.387-.76.631.631 0 0 0-.795.371 11.863 11.863 0 0 0-.57 2.914c-.015.228-.021.451-.022.67-.626-.347-1.324-.512-1.877-.59 1.051-4.145 2.996-5.599 4.272-6.108-.07.203-.11.4-.118.592a.58.58 0 0 0 .114.369c.588.797 1.653 1.563 2.924 2.1.862.365 2.15.761 3.739.803-2.896 2.527-4.52 5.529-4.745 8.833a1.324 1.324 0 0 1-.008.079c-1.29-.374-2.176-.476-2.268-.486a.65.65 0 0 0-.395.085 2.787 2.787 0 0 0-1.325 1.798 3.631 3.631 0 0 0 .197 2.21c-.597.264-1.275.398-1.81.468-1.298-2.157.03-3.213.197-3.333a.582.582 0 0 0 .138-.833.643.643 0 0 0-.872-.136c-.801.552-1.849 2.074-.89 4.243-.68-.256-1.74-.974-1.56-2.957.079-.86.383-1.497.907-1.892.87-.657 2.108-.489 2.125-.486.338.049.658-.172.712-.498a.602.602 0 0 0-.518-.685c-.073-.011-1.775-.257-3.082.72-.812.608-1.279 1.529-1.389 2.737-.36 3.981 3.178 4.385 3.213 4.388.022.002 2.46-.008 4.005-.995.027-.017.638-.368.638-.368.105.131.246.3.413.49l-2.47 1.244a.596.596 0 0 0-.333.53v1.796c0 .33.28.598.625.598s.624-.268.624-.598v-1.434l2.424-1.22c.322.312.69.64 1.097.96l-2.133.595a.616.616 0 0 0-.407.356l-.86 2.095a.59.59 0 0 0 .354.776.642.642 0 0 0 .228.041c.25 0 .485-.144.582-.38l.747-1.82 2.78-.777c.454.266.937.505 1.447.693.074.027.15.04.224.04a.625.625 0 0 0 .584-.384.59.59 0 0 0-.36-.773c-2.818-1.039-4.687-3.642-4.705-3.667a.64.64 0 0 0-.694-.24l-.83.234c-.186-.462-.24-1.009-.13-1.47a1.6 1.6 0 0 1 .587-.93c1.057.165 5.653 1.076 9.063 4.782a.636.636 0 0 0 .47.203c.146 0 .293-.049.412-.15a.581.581 0 0 0 .056-.844 15.255 15.255 0 0 0-.66-.671l4.66-.81c.148-.017 1.956-.182 3.084 1.198a.64.64 0 0 0 .877.103.582.582 0 0 0 .107-.84c-1.609-1.97-4.141-1.66-4.248-1.646a.883.883 0 0 0-.027.004l-5.618.977c-.441-.347-.886-.661-1.33-.944.006-.317.01-.692.028-.886.03-.313.068-.62.116-.923.633-4.058 2.806-7.218 6.47-9.402 2.963-1.767 5.85-2.205 5.898-2.213l.162-.02c3.493 5.912 5.668 14.333 5.868 17.09v5.451H14.403ZM49.597 9.033v10.31H38.69l-.256-1.986c-.227-1.774-.99-3.37-2.21-4.616-1.348-1.379-2.972-2.078-4.825-2.078-4.03 0-5.575 2.868-5.842 4.427a8.806 8.806 0 0 0-1.64 3.37c-.06.247-.105.547-.138.882h-9.375V9.032h35.194Z'
			pathLength={360}
		/>
		<path
			d='M30.222 21.288a.612.612 0 0 0 .625-.6V18.92l1.145.047a.613.613 0 0 0 .651-.571.61.61 0 0 0-.597-.624l-1.796-.075a.634.634 0 0 0-.46.165.587.587 0 0 0-.192.433v2.394c0 .33.28.599.624.599Z'
			pathLength={360}
		/>
	</svg>
);
export default Loader;