import type { FieldConfig } from '@conform-to/react';
import {
	useForm,
	useInputEvent,
	validateConstraint,
	conform,
} from '@conform-to/react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface Schema {
	accept: boolean;
}

export default function Example() {
	const [form, fieldset] = useForm<Schema>({
		onValidate(context) {
			return validateConstraint(context);
		},
	});

	return (
		<main className="max-w-lg mx-auto py-8 px-4">
			<form className="space-y-8 divide-y divide-gray-200" {...form.props}>
				<div className="space-y-8 divide-y divide-gray-200">
					<div>
						<div>
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Radix UI Example
							</h3>
							<p className="mt-1 text-sm text-gray-500">
								This shows you how to integrate Conform with radix-ui
								components, such as Checkbox, Radio Group, Select, Switch and
								RadioGroup.
							</p>
						</div>

						<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
							<div className="sm:col-span-6">
								<div className="flex items-center gap-2 w-full">
									<Checkbox.Root
										{...fieldset.accept}
										className="border border-gray-300 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none focus:ring-2 focus:ring-offset focus:ring-violet11"
									>
										<Checkbox.Indicator className="text-violet11">
											<CheckIcon />
										</Checkbox.Indicator>
									</Checkbox.Root>
									<label className="block text-sm font-medium text-gray-700">
										Accept (Checkbox)
									</label>
								</div>
								<p className="mt-2 text-sm text-red-500">
									{fieldset.accept.error}
								</p>
							</div>
						</div>
					</div>
				</div>
			</form>
		</main>
	);
}
