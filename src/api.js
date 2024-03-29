export const API_URL = 'http://dogs.test/json'

export function TOKEN_POST(body) {
	return {
		url: API_URL + '/jwt-auth/v1/token',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		},
	}
}

export function TOKEN_VALIDATE_POST(token) {
	return {
		url: API_URL + '/jwt-auth/v1/token/validate',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token
			}
		},
	}
}

export function GET_USER(token) {
	return {
		url: API_URL + '/api/user',
		options: {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token
			}
		}
	}
}

export function POST_USER(body) {
	return {
		url: API_URL + '/api/user',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}
}

export function POST_PHOTO(token, formData) {
	return {
		url: API_URL + '/api/photo',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token
			},
			body: formData
		}
	}
}

export function GET_PHOTO(id) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: 'GET',
			cache: 'no-store'
		}
	}
}

export function GET_PHOTOS({ page, total, user }) {
	return {
		url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
		options: {
			method: 'GET',
			cache: 'no-store'
		}
	}
}

export function GET_PHOTO_ID(id) {
	return {
		url: `${API_URL}/api/photo/${id}`
	}
}

export function POST_COMMENT(id, body, token) {
	return {
		url: `${API_URL}/api/comment/${id}`,
		options: {
			method: 'POST',
			cache: 'no-store',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token 
			},
			body: JSON.stringify(body)
		},
	}
}

export function DELETE_PHOTO(id, token) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + token 
			},
		},
	}
}

export function PASSWORD_LOST(body) {
	return {
		url: API_URL + '/api/password/lost',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}
}

export function PASSWORD_RESET(body) {
	return {
		url: API_URL + '/api/password/reset',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}
}

export function GET_STATS(token) {
	return {
		url: API_URL + '/api/stats',
		options: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
			}
		}
	}
}