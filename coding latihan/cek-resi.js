module.exports = {
  getPengiriman: async (req, res) => {
    const { resi } = req.params;

    const pesanan = await pengirimanModel.findOne({
      include: BarangModel,
      where: {
        resi,
      },
    });

    res.status(200);
    res.json({
      status: "success",
      data: {
        resi: string,
        lokasi: pesanan,
      },
    });
  },
};

("61086f9520b451568c574e9eabeded02d178bf14");
