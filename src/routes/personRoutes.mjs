import express from "express";
const router = express.Router();

const people = [
    { id: 1, firstName: "Joël", lastName: "Egger" },
    { id: 2, firstName: "Kenife", lastName: "Coulibaly" }
];

router.get("/", (_, res) => {
    res.json({ people });
});

router.get("/:id", (req, res) => {
    const p = people.filter(x => +x.id === +req.params.id);
    res.json(p);
});

export default router;