import { Patient } from "../types";
import { PatientsDetailsItem } from "./PatientsDetailsItem";
import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";

type PatientDetailsProps = {
	patient: Patient;
};

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
	const deletePatient = usePatientStore((state) => state.deletePatient);
	const getPatientById = usePatientStore((state) => state.getPatientById);

	const handleClick = () => {
		deletePatient(patient.id);
		toast.error("Paciente eliminado correctamente", {
			position: "bottom-left",
		});
	};

	return (
		<div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
			<PatientsDetailsItem label="ID" data={patient.id} />
			<PatientsDetailsItem label="Nombre" data={patient.name} />
			<PatientsDetailsItem label="Propietario" data={patient.caretaker} />
			<PatientsDetailsItem label="Email" data={patient.email} />
			<PatientsDetailsItem
				label="Fecha de Alta"
				data={patient.date.toString()}
			/>
			<PatientsDetailsItem label="Sintomas" data={patient.symptoms} />

			<div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
				<button
					className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
					onClick={() => getPatientById(patient.id)}>
					Editar
				</button>
				<button
					className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
					onClick={handleClick}>
					Eliminar
				</button>
			</div>
		</div>
	);
};
