import React from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
	componentDidMount(){
		console.log(this.props)
		this.props.loadCourses()
	}

	/*
		state = {
			course: {
				title: ""
			}
		}
	handleChange = e => {
		e.preventDefault()
		const course = {...this.state.course, title: e.target.value}
		this.setState({course})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.createCourse(this.state.course)
	}
	*/

  render() {
		return (

			<>
			<h2>Courses</h2>

			{
				this.props.courses.map(course => (
					<div key={course.title}>{course.title}</div>
				))
			}
			</>

		)	;
  }
}
CoursesPage.propTypes = {
	createCourse: PropTypes.func.isRequired,
	loadCourses: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired
}
function mapStateToProps(state){
	return {courses: state.course}
}
function mapDispatchToProps(dispatch){
	return {
		createCourse: (course) => dispatch(courseActions.createCourse(course)),
		loadCourses: () => dispatch(courseActions.loadCourses())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
