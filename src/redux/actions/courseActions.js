import * as courseApi from '../../api/courseApi';

export function createCourse(course){
	return {type: "CREATE_COURSE", course}
}

export function loadCoursesSuccess(courses){
	return {type: "LOAD_COURSE_SUCCESS", courses}
}

export function loadCourses(){
	return function(dispatch){
		return courseApi.getCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses))
		}).catch(error => {
			throw error;
		})
	}
}

