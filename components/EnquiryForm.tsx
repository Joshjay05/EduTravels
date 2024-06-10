"use client";
import React, { useState, ChangeEvent, FormEvent, useCallback } from "react";
import { countriesData, Country } from "@/constant";

const EnquiryForm: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [selectedCountry, setSelectedCountry] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [specificCategory, setSpecificCategory] = useState<string>("");
	const [states, setStates] = useState<string[]>([]);
	const [selectedState, setSelectedState] = useState<string>("");

	const handleCountryChange = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			const countryName = event.target.value;
			setSelectedCountry(countryName);

			const country = countriesData.find((c) => c.name === countryName);
			if (country) {
				setSelectedCategory(country.category);
				setStates(country.states);
				if (country.category !== "both") {
					setSpecificCategory("");
				}
			} else {
				setSelectedCategory("");
				setStates([]);
				setSpecificCategory("");
			}

			setSelectedState("");
		},
		[]
	);

	const handleSubmit = useCallback(
		async (event: FormEvent) => {
			event.preventDefault();

			const category =
				selectedCategory === "both" ? specificCategory : selectedCategory;

			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					country: selectedCountry,
					category,
					state: selectedState,
				}),
			});

			if (response.ok) {
				alert("Email sent successfully");
				setName("");
				setEmail("");
				setSelectedCountry("");
				setSelectedCategory("");
				setStates([]);
				setSelectedState("");
				setSpecificCategory("");
			} else {
				alert("Failed to send email");
			}
		},
		[
			name,
			email,
			selectedCountry,
			selectedCategory,
			specificCategory,
			selectedState,
		]
	);

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700 mb-2">
					Name
				</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="w-full border border-gray-300 rounded p-2"
				/>
			</div>

			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700 mb-2">
					Email
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="w-full border border-gray-300 rounded p-2"
				/>
			</div>

			<div className="mb-4">
				<label
					htmlFor="country"
					className="block text-sm font-medium text-gray-700 mb-2">
					Country
				</label>
				<select
					id="country"
					value={selectedCountry}
					onChange={handleCountryChange}
					className="w-full border border-gray-300 rounded p-2">
					<option value="">Select a country</option>
					{countriesData.map((country) => (
						<option key={country.name} value={country.name}>
							{country.name}
						</option>
					))}
				</select>
			</div>

			{selectedCategory && (
				<div className="mb-4">
					<label
						htmlFor="category"
						className="block text-sm font-medium text-gray-700 mb-2">
						Category
					</label>
					{selectedCategory === "both" ? (
						<select
							id="specificCategory"
							value={specificCategory}
							onChange={(e) => setSpecificCategory(e.target.value)}
							className="w-full border border-gray-300 rounded p-2"
							required>
							<option value="">Select a category</option>
							<option value="work">Work</option>
							<option value="study">Study</option>
						</select>
					) : (
						<input
							id="category"
							type="text"
							value={selectedCategory}
							readOnly
							className="w-full border border-gray-300 rounded p-2 bg-gray-100"
						/>
					)}
				</div>
			)}

			{selectedCategory && (
				<div className="mb-4">
					<label
						htmlFor="state"
						className="block text-sm font-medium text-gray-700 mb-2">
						State Of Residence
					</label>
					<input
						id="state"
						list="states"
						value={selectedState}
						onChange={(e) => setSelectedState(e.target.value)}
						placeholder="Enter state"
						className="w-full border border-gray-300 rounded p-2"
					/>
					<datalist id="states">
						{states.map((state, index) => (
							<option key={index} value={state}>
								{state}
							</option>
						))}
					</datalist>
				</div>
			)}

			<button
				type="submit"
				className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
				Submit
			</button>
		</form>
	);
};

export default EnquiryForm;
