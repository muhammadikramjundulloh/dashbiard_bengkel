import React, { useState } from "react";
import Modal from "react-modal";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { DUMMY_DATA } from "./DummyDataLayanan"; // Import dummy data

const TABLE_HEAD = ["Layanan", "Harga", "Status", "Tanggal", "Edit"];

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    padding: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    border: "none",
    borderRadius: "8px",
  },
};

export function Layanan() {
  const [isAddLayananFormVisible, setAddLayananFormVisible] = useState(false);
  const [isEditLayananFormVisible, setEditLayananFormVisible] = useState(false);
  const [layananFormData, setLayananFormData] = useState({
    name: "",
    price: "",
    proses: "",
    date: "",
  });
  const [tableRows, setTableRows] = useState(DUMMY_DATA);
  const [selectedLayananIndex, setSelectedLayananIndex] = useState(null);

  const handleAddLayananClick = () => {
    setAddLayananFormVisible(true);
    setLayananFormData({
      name: "",
      price: "",
      proses: "",
      date: "",
    });
  };

  const handleAddLayanan = () => {
    const newLayanan = { ...layananFormData, proses: true, date: "01/01/22" };
    setTableRows((prevRows) => [...prevRows, newLayanan]);
    setAddLayananFormVisible(false);
  };

  const handleEditLayananClick = (index) => {
    setSelectedLayananIndex(index);
    setLayananFormData({ ...tableRows[index] });
    setEditLayananFormVisible(true);
  };

  const handleEditLayanan = () => {
    const updatedLayanan = { ...layananFormData };
    const updatedTableRows = [...tableRows];
    updatedTableRows[selectedLayananIndex] = updatedLayanan;
    setTableRows(updatedTableRows);
    setEditLayananFormVisible(false);
  };

  const handleDeleteLayanan = () => {
    const updatedTableRows = tableRows.filter((_, index) => index !== selectedLayananIndex);
    setTableRows(updatedTableRows);
    setEditLayananFormVisible(false);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Daftar Layanan
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm" onClick={handleAddLayananClick}>
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Tambah Layanan
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <Modal
          isOpen={isAddLayananFormVisible}
          onRequestClose={() => setAddLayananFormVisible(false)}
          contentLabel="Modal Tambah Layanan"
          style={customModalStyles}
        >
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Tambah Layanan
          </Typography>
          <div className="mb-4">
            <label htmlFor="name">Layanan</label>
            <Input
              id="name"
              placeholder="Layanan"
              value={layananFormData.name}
              onChange={(e) => setLayananFormData({ ...layananFormData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price">Harga</label>
            <Input
              id="price"
              placeholder="Harga"
              value={layananFormData.price}
              onChange={(e) => setLayananFormData({ ...layananFormData, price: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status">Status</label>
            <Input
              id="status"
              placeholder="Status"
              value={layananFormData.proses}
              onChange={(e) => setLayananFormData({ ...layananFormData, proses: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date">Tanggal</label>
            <Input
              id="date"
              placeholder="Tanggal"
              value={layananFormData.date}
              onChange={(e) => setLayananFormData({ ...layananFormData, date: e.target.value })}
            />
          </div>
          <Button onClick={handleAddLayanan}>Tambah Layanan</Button>
        </Modal>
        <Modal
          isOpen={isEditLayananFormVisible}
          onRequestClose={() => setEditLayananFormVisible(false)}
          contentLabel="Modal Edit Layanan"
          style={customModalStyles}
        >
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Edit Layanan
          </Typography>
          <div className="mb-4">
            <label htmlFor="edit-name">Layanan</label>
            <Input
              id="edit-name"
              placeholder="Layanan"
              value={layananFormData.name}
              onChange={(e) => setLayananFormData({ ...layananFormData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-price">Harga</label>
            <Input
              id="edit-price"
              placeholder="Harga"
              value={layananFormData.price}
              onChange={(e) => setLayananFormData({ ...layananFormData, price: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-status">Status</label>
            <Input
              id="edit-status"
              placeholder="Status"
              value={layananFormData.proses}
              onChange={(e) => setLayananFormData({ ...layananFormData, proses: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-date">Tanggal</label>
            <Input
              id="edit-date"
              placeholder="Tanggal"
              value={layananFormData.date}
              onChange={(e) => setLayananFormData({ ...layananFormData, date: e.target.value })}
            />
          </div>
          <Button onClick={handleEditLayanan}>Simpan Perubahan</Button>
          <Button color="red" onClick={handleDeleteLayanan} className="ml-2">
            Hapus Layanan
          </Button>
        </Modal>
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(({ name, price, proses, date }, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {price}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={proses ? "proses" : "Selesai"}
                        color={proses ? "green" : "blue"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit Layanan">
                      <IconButton variant="text" onClick={() => handleEditLayananClick(index)}>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default Layanan;
