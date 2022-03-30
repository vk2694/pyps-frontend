import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RolePermission } from "../Context/RolePermission";
import { getUserList } from "../Helper/service";

function Home() {
  const { roleData, setRoleData } = useContext(RolePermission);
  const [user, setUserData] = useState([]);
  const navigate = useNavigate();

  const admin = {
    project: {
      create: 1,
      update: 1,
      view: 1,
      delete: 1,
    },
    tasks: {
      create: 0,
      update: 0,
      view: 0,
      delete: 0,
    },
  };
  const manager = {
    project: {
      create: 0,
      update: 0,
      view: 1,
      delete: 0,
    },
    tasks: {
      create: 1,
      update: 0,
      view: 1,
      delete: 1,
    },
  };
  const developer = {
    project: {
      create: 0,
      update: 0,
      view: 1,
      delete: 0,
    },
    tasks: {
      create: 0,
      update: 1,
      view: 1,
      delete: 0,
    },
  };

  // Fetching the UserList from API
  useEffect(() => {
    getUserList()
      .then((res) => {
        if (res["status"] == 200) {
          setUserData(res.data.response);         
        }
      })
      .catch((err) => {
        console.log(`Error on server! ${err}`);
      });
  }, []);

  function navigateToProjectPage(user_type) {
    if (user_type === "Admin") {
      setRoleData(admin);
    }
    if (user_type === "Manager") {
      setRoleData(manager);
    }
    if (user_type === "Developer") {
      setRoleData(developer);
    }
    navigate('/project');
  }

  return (
    <div className="my-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-indigo-600 text-center font-bold text-2xl">PYPS</h1>
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add User
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Project
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {user && user.map((user) => (
                      <tr key={user.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {user?.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {user?.user_type}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-indigo-600 hover:text-indigo-900"
                        onClick={() => navigateToProjectPage(user?.user_type)}>                          
                            view                          
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
