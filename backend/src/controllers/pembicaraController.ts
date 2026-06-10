import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// Menampilkan semua pembicara
export const getPembicara = async (req: Request, res: Response) => {
  try {
    const pembicara = await prisma.pembicara.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(pembicara);
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data pembicara",
      error,
    });
  }
};

// Menyimpan pembicara
export const createPembicara = async (req: Request, res: Response) => {
  try {
    const { name, role, image } = req.body;

    if (!name || !role || !image) {
      return res.status(400).json({
        message: "Semua field wajib diisi",
      });
    }

    const newPembicara = await prisma.pembicara.create({
      data: {
        name,
        role,
        image,
      },
    });

    return res.status(201).json({
      message: "Pembicara berhasil ditambahkan",
      pembicara: newPembicara,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal menambahkan pembicara",
      error,
    });
  }
};

// Menampilkan detail pembicara berdasarkan id
export const showPembicara = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const pembicara = await prisma.pembicara.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!pembicara) {
      return res.status(404).json({
        message: "Pembicara tidak ditemukan",
      });
    }

    return res.json(pembicara);
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil detail pembicara",
      error,
    });
  }
};

// Mengupdate pembicara
export const updatePembicara = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, role, image } = req.body;

    const updatedPembicara = await prisma.pembicara.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        role,
        image,
      },
    });

    return res.json({
      message: "Pembicara berhasil diupdate",
      pembicara: updatedPembicara,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengupdate pembicara",
      error,
    });
  }
};

// Menghapus pembicara
export const deletePembicara = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.pembicara.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({
      message: "Pembicara berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal menghapus pembicara",
      error,
    });
  }
};