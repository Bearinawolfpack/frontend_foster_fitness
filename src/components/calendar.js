import React from "react";
import Iframe from "react-iframe";
import Layout from "./layout"

function Calendar(props) {
	return (
		<Layout>
			<Iframe
				src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=America%2FNew_York&amp;src=azc5ZHNyN3ZyOTB2OWlwNnJicjBsMWI3djBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"
				style="border:solid 1px #777"
				width="800"
				height="600"
				frameborder="0"
				scrolling="no"
			/>
		</Layout>
	);
}

export default Calendar;
