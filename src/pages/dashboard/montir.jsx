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
import { DUMMY_DATA } from "./DummyData"; // Import dummy data

const TABLE_HEAD = ["Nama", "Keahlian", "Status", "Tanggal", "Edit"];

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

export function Montir() {
  const [isAddMontirFormVisible, setAddMontirFormVisible] = useState(false);
  const [isEditMontirFormVisible, setEditMontirFormVisible] = useState(false);
  const [montirFormData, setMontirFormData] = useState({
    nama: "",
    keahlian: "",
    status: "",
    tanggal: "",
  });
  const [tableRows, setTableRows] = useState(DUMMY_DATA);
  const [selectedMontirIndex, setSelectedMontirIndex] = useState(null);

  const handleAddMontirClick = () => {
    setAddMontirFormVisible(true);
    setMontirFormData({
      nama: "",
      keahlian: "",
      status: "",
      tanggal: "",
    });
  };

  const handleAddMontir = () => {
    const newMontir = { ...montirFormData, aktif: true, date: "01/01/22" };
    setTableRows((prevRows) => [...prevRows, newMontir]);
    setAddMontirFormVisible(false);
  };

  const handleEditMontirClick = (index) => {
    setSelectedMontirIndex(index);
    setMontirFormData({ ...tableRows[index] });
    setEditMontirFormVisible(true);
  };

  const handleEditMontir = () => {
    const updatedMontir = { ...montirFormData };
    const updatedTableRows = [...tableRows];
    updatedTableRows[selectedMontirIndex] = updatedMontir;
    setTableRows(updatedTableRows);
    setEditMontirFormVisible(false);
  };

  const handleDeleteMontir = () => {
    const updatedTableRows = tableRows.filter((_, index) => index !== selectedMontirIndex);
    setTableRows(updatedTableRows);
    setEditMontirFormVisible(false);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Daftar Montir
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm" onClick={handleAddMontirClick}>
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Tambah Montir
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <Modal
          isOpen={isAddMontirFormVisible}
          onRequestClose={() => setAddMontirFormVisible(false)}
          contentLabel="Modal Tambah Montir"
          style={customModalStyles}
        >
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Tambah Montir
          </Typography>
          <div className="mb-4">
            <label htmlFor="nama">Nama</label>
            <Input
              id="nama"
              placeholder="Nama"
              value={montirFormData.nama}
              onChange={(e) => setMontirFormData({ ...montirFormData, nama: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="keahlian">Keahlian</label>
            <Input
              id="keahlian"
              placeholder="Keahlian"
              value={montirFormData.keahlian}
              onChange={(e) => setMontirFormData({ ...montirFormData, keahlian: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status">Status</label>
            <Input
              id="status"
              placeholder="Status"
              value={montirFormData.status}
              onChange={(e) => setMontirFormData({ ...montirFormData, status: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tanggal">Tanggal</label>
            <Input
              id="tanggal"
              placeholder="Tanggal"
              value={montirFormData.tanggal}
              onChange={(e) => setMontirFormData({ ...montirFormData, tanggal: e.target.value })}
            />
          </div>
          <Button onClick={handleAddMontir}>Tambah Montir</Button>
        </Modal>
        <Modal
          isOpen={isEditMontirFormVisible}
          onRequestClose={() => setEditMontirFormVisible(false)}
          contentLabel="Modal Edit Montir"
          style={customModalStyles}
        >
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Edit Montir
          </Typography>
          <div className="mb-4">
            <label htmlFor="edit-nama">Nama</label>
            <Input
              id="edit-nama"
              placeholder="Nama"
              value={montirFormData.nama}
              onChange={(e) => setMontirFormData({ ...montirFormData, nama: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-keahlian">Keahlian</label>
            <Input
              id="edit-keahlian"
              placeholder="Keahlian"
              value={montirFormData.keahlian}
              onChange={(e) => setMontirFormData({ ...montirFormData, keahlian: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-status">Status</label>
            <Input
              id="edit-status"
              placeholder="Status"
              value={montirFormData.status}
              onChange={(e) => setMontirFormData({ ...montirFormData, status: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-tanggal">Tanggal</label>
            <Input
              id="edit-tanggal"
              placeholder="Tanggal"
              value={montirFormData.tanggal}
              onChange={(e) => setMontirFormData({ ...montirFormData, tanggal: e.target.value })}
            />
          </div>
          <Button onClick={handleEditMontir}>Simpan Perubahan</Button>
          <Button color="red" onClick={handleDeleteMontir} className="ml-2">
            Hapus Montir
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
            {tableRows.map(({ img, name, email, job, org, aktif, date }, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={img} alt={name} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {job}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {org}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={aktif ? "aktif" : "Tidak Aktif"}
                        color={aktif ? "green" : "red"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text" onClick={() => handleEditMontirClick(index)}>
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

export default Montir;