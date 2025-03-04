<template src='./documents.html'></template>

<script src='./documents.js'></script>
<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        padding: 15px;
        }
        
        .title {
        font-size: 24px;
        margin-bottom: 20px;
        }
        
        .section {
        background-color: white;
        margin-bottom: 20px;
        border-radius: 4px;
        padding: 20px;
        }
        
        .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        }
        
        .section-number {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-color: black;
        color: white;
        border-radius: 50%;
        text-align: center;
        line-height: 24px;
        margin-right: 10px;
        }
        
        .section-title {
        font-size: 20px;
        margin: 0;
        }
        
        .search-bar {
        display: flex;
        margin-bottom: 15px;
        }
        
        .search-input {
        flex: 1;
        padding: 10px;
        border: none;
        background-color: #e0e0e0;
        margin-right: 10px;
        }
        
        .dropdown-container {
        flex: 1;
        }
        
        .dropdown {
        width: 100%;
        padding: 10px;
        border: none;
        background-color: #e0e0e0;
        }
        
        .asset-list, .weakness-list {
        background-color: #e0e0e0;
        padding: 10px;
        margin-bottom: 15px;
        }
        
        .asset-item, .weakness-item {
        background-color: white;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        }
        
        .asset-count, .weakness-count {
        font-size: 14px;
        }
        
        .severity-score {
        margin-left: auto;
        text-align: right;
        }
        
        .severity-label {
        color: #666;
        }
        
        .severity-selector {
        display: flex;
        margin-bottom: 20px;
        }
        
        .selector-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        }
        
        .dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #666;
        margin-right: 5px;
        }
        
        .dot.filled {
        background-color: black;
        border-color: black;
        }
        
        .criteria-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        }
        
        .criteria-title {
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 10px;
        }
        
        .criteria-options {
        display: flex;
        flex-wrap: wrap;
        }
        
        .criteria-option {
        background-color: #e0e0e0;
        padding: 10px;
        flex: 1;
        text-align: center;
        border-right: 1px solid white;
        }
        
        .criteria-option:last-child {
        border-right: none;
        }
        
        .title-input-section, .checkbox-section, .description-section, .impact-section {
        margin-bottom: 20px;
        }
        
        .title-input {
        width: 100%;
        padding: 10px;
        background-color: #e0e0e0;
        border: none;
        margin-top: 5px;
        }
        
        .editor-container {
        border: 1px solid #e0e0e0;
        }
        
        .editor-content {
        padding: 15px;
        min-height: 200px;
        background-color: #e0e0e0;
        }
        
        .editor-content.empty {
        min-height: 100px;
        }
        
        .editor-controls {
        display: flex;
        background-color: #f5f5f5;
        padding: 5px;
        }
        
        .editor-btn {
        background: none;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }

    .editor-btn.active {
    font-weight: bold;
    }

    .editor-info {
    margin-left: auto;
    color: #666;
    font-size: 14px;
    padding: 5px;
    }

    .preview-section {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    }

    .preview-title {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 15px;
    }

    .preview-content {
    margin-bottom: 20px;
    min-height: 200px;
    }

    .preview-actions {
    display: flex;
    justify-content: flex-end;
    }

    .btn {
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    margin-left: 10px;
    cursor: pointer;
    }

    .btn-cancel {
    background-color: white;
    border: 1px solid #ddd;
    }

    .btn-draft {
    background-color: white;
    border: 1px solid #ddd;
    }

    .btn-submit {
    background-color: white;
    border: 1px solid #ddd;
    }
</style>