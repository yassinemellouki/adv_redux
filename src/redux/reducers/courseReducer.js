export default function courseReducer(state = [], action){
	switch(action.type){
		case "CREATE_COURSE":
			return [...state, { ...action.course }];
		case "LOAD_COURSE_SUCCESS":
			return action.courses;
		default:
			return state;
	}
}
