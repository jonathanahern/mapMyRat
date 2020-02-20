export const signup = user => {
  return $.ajax({
    method: "POST",
    data: { user },
    url: "api/users"
  });
};

export const login = user => {
  return $.ajax({
    method: "POST",
    data: { user },
    url: "/api/session"
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};

export const fetchUsers = () => {
  return $.ajax({
    url: "api/users",
    method: "GET"
  });
};