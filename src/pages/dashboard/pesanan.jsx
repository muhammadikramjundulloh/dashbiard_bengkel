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
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["Pesanan", "Montir", "Status", "Masalah", "Detail"];

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

const TABLE_ROWS = [
  {
    pesanan: "Mobil Mogok",
    montir: "Agus",
    status: true,
    masalah: "Mesin Mati",
    date: "23/04/18",
  },
  {
    pesanan: "Aki Soak",
    montir: "Agus",
    status: false,
    masalah: "Aki Rusak",
    date: "23/04/18",
  },
  {
    pesanan: "Ban Bocor",
    montir: "Agus",
    status: false,
    masalah: "Ban Bocor",
    date: "19/09/17",
  },
  {
    pesanan: "Mesin ilang",
    montir: "Agus0",
    status: true,
    masalah: "Mesin Hilang",
    date: "24/12/08",
  },
  {
    pesanan: "Derek",
    montir: "Agus",
    status: false,
    masalah: "Mobil Tidak Bisa Jalan",
    date: "04/10/21",
  },
];

export function Pesanan() {
  const [isAddPesananFormVisible, setAddPesananFormVisible] = useState(false);
  const [isEditPesananFormVisible, setEditPesananFormVisible] = useState(false);
  const [pesananFormData, setPesananFormData] = useState({
    pesanan: "",
    montir: "",
    status: false,
    masalah: "",
    date: "",
  });
  const [tableRows, setTableRows] = useState(TABLE_ROWS);
  const [selectedPesananIndex, setSelectedPesananIndex] = useState(null);

  const handleAddPesananClick = () => {
    setAddPesananFormVisible(true);
    setPesananFormData({
      pesanan: "",
      montir: "",
      status: false,
      masalah: "",
      date: "",
    });
  };

  const handleAddPesanan = () => {
    const newPesanan = { ...pesananFormData };
    setTableRows((prevRows) => [...prevRows, newPesanan]);
    setAddPesananFormVisible(false);
  };

  const handleEditPesananClick = (index) => {
    setSelectedPesananIndex(index);
    setPesananFormData({ ...tableRows[index] });
    setEditPesananFormVisible(true);
  };

  const handleEditPesanan = () => {
    const updatedPesanan = { ...pesananFormData };
    const updatedTableRows = [...tableRows];
    updatedTableRows[selectedPesananIndex] = updatedPesanan;
    setTableRows(updatedTableRows);
    setEditPesananFormVisible(false);
  };

  const handleDeletePesanan = () => {
    const updatedTableRows = tableRows.filter((_, index) => index !== selectedPesananIndex);
    setTableRows(updatedTableRows);
    setEditPesananFormVisible(false);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Daftar Pesanan
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm" onClick={handleAddPesananClick}>
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Tambah Pesanan
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <Modal
          isOpen={isAddPesananFormVisible}
          onRequestClose={() => setAddPesananFormVisible(false)}
          contentLabel="Modal Tambah Pesanan"
          style={customModalStyles}
        >
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Tambah Pesanan
          </Typography>
          <div className="mb-4">
            <label htmlFor="pesanan">Pesanan</label>
            <Input
              id="pesanan"
              placeholder="Pesanan"
              value={pesananFormData.pesanan}
              onChange={(e) => setPesananFormData({ ...pesananFormData, pesanan: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="montir">Montir</label>
            <Input
              id="montir"
              placeholder="Montir"
              value={pesananFormData.montir}
              onChange={(e) => setPesananFormData({ ...pesananFormData, montir: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={pesananFormData.status}
              onChange={(e) => setPesananFormData({ ...pesananFormData, status: e.target.value })}
            >
              <option value={true}>Proses</option>
              <option value={false}>Selesai</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="masalah">Masalah</label>
            <Input
              id="masalah"
              placeholder="Masalah"
              value={pesananFormData.masalah}
              onChange={(e) => setPesananFormData({ ...pesananFormData, masalah: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date">Tanggal</label>
            <Input
              id="date"
              placeholder="Tanggal"
              value={pesananFormData.date}
              onChange={(e) => setPesananFormData({ ...pesananFormData, date: e.target.value })}
            />
          </div>
          <Button onClick={handleAddPesanan}>Tambah Pesanan</Button>
        </Modal>
        <Modal
          isOpen={isEditPesananFormVisible}
          onRequestClose={() => setEditPesananFormVisible(false)}
          contentLabel="Modal Edit Pesanan"
          style={customModalStyles}
        >
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Edit Pesanan
          </Typography>
          <div className="mb-4">
            <label htmlFor="edit-pesanan">Pesanan</label>
            <Input
              id="edit-pesanan"
              placeholder="Pesanan"
              value={pesananFormData.pesanan}
              onChange={(e) => setPesananFormData({ ...pesananFormData, pesanan: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-montir">Montir</label>
            <Input
              id="edit-montir"
              placeholder="Montir"
              value={pesananFormData.montir}
              onChange={(e) => setPesananFormData({ ...pesananFormData, montir: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-status">Status</label>
            <select
              id="edit-status"
              value={pesananFormData.status}
              onChange={(e) => setPesananFormData({ ...pesananFormData, status: e.target.value })}
            >
              <option value={true}>Proses</option>
              <option value={false}>Selesai</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="edit-masalah">Masalah</label>
            <Input
              id="edit-masalah"
              placeholder="Masalah"
              value={pesananFormData.masalah}
              onChange={(e) => setPesananFormData({ ...pesananFormData, masalah: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="edit-date">Tanggal</label>
            <Input
              id="edit-date"
              placeholder="Tanggal"
              value={pesananFormData.date}
              onChange={(e) => setPesananFormData({ ...pesananFormData, date: e.target.value })}
            />
          </div>
          <Button onClick={handleEditPesanan}>Simpan Perubahan</Button>
          <Button color="red" onClick={handleDeletePesanan} className="ml-2">
            Hapus Pesanan
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
            {tableRows.map(({ pesanan, montir, status, masalah, date }, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={pesanan}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {pesanan}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {montir}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status ? "Proses" : "Selesai"}
                        color={status ? "green" : "blue"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {masalah}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit Pesanan">
                      <IconButton variant="text" onClick={() => handleEditPesananClick(index)}>
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

export default Pesanan;