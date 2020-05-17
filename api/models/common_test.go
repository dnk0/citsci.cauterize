package models

var tmpUserList []User

// This function is used to store the main lists into the temporary one
// for testing
func saveLists() {
	tmpUserList = userList
}

// This function is used to restore the main lists from the temporary one
func restoreLists() {
	userList = tmpUserList
}
