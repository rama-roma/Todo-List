import { useMutation, useQuery } from "@tanstack/react-query";
import { addUser, deleteUser, editUser, getUser } from "../services/category";
import { queryClient } from "../main";
import { useState } from "react";
import { Input, Modal, Button } from "antd";
import { Link } from "react-router";

const Category = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [newName, setNewName] = useState("");

  const [openEdit, setOpenEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getUser,
  });

  const deleteData = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const addData = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const editData = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleAdd = () => {
    addData.mutate({ name: newName });
    setOpenAdd(false);
    setNewName("");
  };

  const handleEdit = () => {
    editData.mutate({ id: editId, name: editName });
    setOpenEdit(false);
    setEditId(null);
    setEditName("");
  };

  return (
    <>
      <main>
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <div className="flex gap-3 items-center">
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-56"
            />
            <Button
              type="primary"
              className="!bg-black !hover:bg-gray-800 !border-none"
              onClick={() => setOpenAdd(true)}
            >
              + Add
            </Button>
          </div>
        </header>


        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.data
            .filter((e) =>
              e.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition flex flex-col justify-between"
              >
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  {e.name}
                </h2>

                <div className="flex gap-2">
                  <Button
                    danger
                    size="small"
                    onClick={() => deleteData.mutate(e.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    className=" bg-gray-100 text-gray-800 hover:bg-gray-200"
                    onClick={() => {
                      setOpenEdit(true);
                      setEditName(e.name);
                      setEditId(e.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Link to={`/infoCategory/${e.id}`}>
                    <button className="w-20 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                      Info
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </section>
      </main>


      <Modal
        title="Add Category"
        open={openAdd}
        onCancel={() => setOpenAdd(false)}
        onOk={handleAdd}
        okText="Add"
      >
        <Input
          placeholder="Category name..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </Modal>

      <Modal
        title="Edit Category"
        open={openEdit}
        onCancel={() => setOpenEdit(false)}
        onOk={handleEdit}
        okText="Save"
      >
        <Input
          placeholder="Category name..."
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default Category;
