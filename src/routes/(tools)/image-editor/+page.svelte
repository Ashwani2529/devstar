<script>
	import Crop from './_components/Crop.svelte';
	import Filter from './_components/Filter.svelte';
	import ImagePreview from './_components/ImagePreview.svelte';
	import FillRedact from './_components/FillRedact.svelte';
	import StickerFrame from './_components/StickerFrame.svelte';
	import ReSize from './_components/Resize.svelte';
  import Finetune from './_components/Finetune.svelte';
  import Annotation from './_components/Annotation.svelte';
    let currentFeature = '';
	let imageUrl = '';
	let image = "https://picsum.photos/500/500"
    function showFeature(feature) {
		currentFeature = feature;
		if(feature==="choose-random"){
			imageUrl="https://picsum.photos/500/500";
		}
    }
	function uploadImage(){
		imageUrl = '';
	}
	function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            imageUrl = URL.createObjectURL(file);
        }
		console.log(imageUrl);
    }

</script>

<div class="container flex justify-between">
	<button on:click={() => showFeature('choose-random')} class="flex justify-evenly items-center bg-gray-400 dark:bg-white p-2 my-3 rounded-xl">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
		  </svg><span class="font-semibold">Choose A Random Image</span>
	</button>
</div>

<div class="card gap-16 items-center mx-auto max-w-screen-xl lg:flex overflow-hidden rounded-lg">
	<!-- Add tool here -->
	<div class="flex lg:flex-col w-full p-4 basis-1 md:flex-row md:justify-around">
        <button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('crop')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crop" viewBox="0 0 16 16">
				<path d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5m2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5"/>
			  </svg>Crop
		</button>
		<button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('finetune')}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
			  </svg>Finetune
		</button>
        <button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('filter')}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
			  </svg>Filter
		</button>
        <button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('annotate')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
				<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
				<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
			  </svg>Annotate
		</button>
    </div>
    <div class="flex justify-center items-center flex-grow w-full bg-inherit rounded-lg">
        {#if currentFeature === 'crop'}
            <Crop image={imageUrl} />
		{:else if currentFeature === 'filter'}
			<Filter image={imageUrl} />
		{:else if currentFeature === 'fill'}
			<FillRedact image={imageUrl}/>
		{:else if currentFeature === 'finetune'}
			<Finetune image={imageUrl}/>
		{:else if currentFeature === 'annotate'}
			<Annotation image={imageUrl}/>
		{:else if currentFeature === 'upload-pic'}
			<div class="flex items-center justify-center w-full">
				<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
					<div class="flex flex-col items-center justify-center pt-5 pb-6">
						<svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
						</svg>
						<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
						<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
					</div>
					{#if imageUrl}
						<ImagePreview image={imageUrl} />
						{:else}
						<input id="dropzone-file" type="file" accept="image/*" class="hidden" on:change={handleFileChange}/>
					{/if}
					
				</label>
			</div>
		{:else if currentFeature === 'choose-random'}
			<ImagePreview image="https://picsum.photos/500/500" />
		{:else if currentFeature === 'stickers'}
			<StickerFrame image={imageUrl}/>
		{:else if currentFeature === 'resize'}
			<ReSize bind:image = {imageUrl}/>
		{:else}
			<div class="flex items-center justify-center w-full">
				<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
					<div class="flex flex-col items-center justify-center pt-5 pb-6">
						<svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
						</svg>
						<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
						<p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
					</div>
					{#if imageUrl}
					<ImagePreview image={imageUrl} />
					{:else}
					<input id="dropzone-file" type="file" accept="image/*" class="hidden" on:change={handleFileChange}/>
			{/if}
				</label>
			</div>
        {/if}
	</div>
	<div class="flex lg:flex-col w-full p-4 border-gray-300 basis-1 md:flex-row md:justify-around">
        <button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('fill')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paint-bucket" viewBox="0 0 16 16">
				<path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a3 3 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1 1 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4 4 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067S8.857 3.052 8.23 2.704c-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.3 3.3 0 0 1-.131-.673q.137.09.337.274m.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088q.081.181.183.365c.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626q.183.103.365.183l-4.861 4.862-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46s-1.168-1.32-1.46-1.846c-.147-.265-.225-.47-.251-.607l-.01-.068zm2.87-1.935a2.4 2.4 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.5 3.5 0 0 0-1.066.091 11 11 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/>
			  </svg>Fill
		</button>
		<button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('stickers')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
				<path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
			  </svg>Stickers
		</button>
		<button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => showFeature('resize')}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-textarea-resize" viewBox="0 0 16 16">
				<path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0m0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0"/>
			  </svg>Resize
		</button>
		<!-- <button class="flex flex-col justify-center items-center border rounded-lg text-white bg-slate-400 dark:bg-inherit dark:text-white p-2 cursor-pointer mb-2 hover:scale-110" on:click={() => {uploadImage(), showFeature('upload-pic')}}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
			  </svg>Upload
		</button> -->
    </div>
</div>

<style>
	.card{
		/* width:max-content; */
		height:max-content;
	}

</style>